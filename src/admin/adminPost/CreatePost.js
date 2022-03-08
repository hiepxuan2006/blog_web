import React, { useEffect, useRef, useState } from "react";
import TextEditor from "../form/TextEditor";
import { EditorState } from "draft-js";
import "./CreatePost.scss";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import FileBase64 from "react-file-base64";
import { createNewPost } from "../../api/postApi";

function CreatePost(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  //   console.log();

  const imgRef = useRef();

  const [createForm, setCreateForm] = useState({
    title: "",
    category: "",
    place: "",
    description: "",
    attachment: "",
  });
  useEffect(() => {
    setCreateForm({
      ...createForm,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  }, [editorState]);

  const createPost = async (e) => {
    e.preventDefault();
    const response = await createNewPost(createForm);
    setCreateForm({
      title: "",
      category: "",
      place: "",
      description: "",
      attachment: "",
    })
    alert("thnah cong");
  };
  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  return (
    <div className="grid wide">
      <div
        className="create__post"
        style={{ width: "100%", marginBottom: "50px" }}
      >
        <div className="heading">
          <h1 style={{ fontSize: "30px", margin: "20px 0" }}>
            Thêm mới bài viết
          </h1>
        </div>
        <form className="form__create" onSubmit={createPost}>
          <div style={{ marginBottom: "30px" }} className="form__input">
            <label
              style={{ fontSize: "18px", padding: "20px 0", display: "block" }}
            >
              Tiêu Đề
            </label>
            <input
              value={createForm.title}
              name="title"
              style={{ width: "100%", outLine: "none", fontSize: "18px" }}
              type="text"
              className="input-form"
              onChange={(e) =>
                setCreateForm({ ...createForm, title: e.target.value })
              }
            />
          </div>
          <TextEditor
            value={createForm.description}
            label="Nhập mô tả sản phẩm"
            state={editorState}
            onChange={(values) => setEditorState(values)}
          />
          <select
            onChange={(e) =>
              setCreateForm({ ...createForm, category: e.target.value })
            }
            value={createForm.category}
            name="category"
            defaultValue={"DEFAULT"}
            style={{ margin: "30px 0" }}
          >
            <option disabled value="DEFAULT">
              Category
            </option>
            <option value="diadiem">Địa điểm</option>
            <option value="Cẩm Nang Du Lịch">Cẩm nang du lịch</option>
            <option value="cnanuong">Cẩm nang ăn uống</option>
          </select>
          <select
            onChange={(e) =>
              setCreateForm({ ...createForm, place: e.target.value })
            }
            value={createForm.place}
            name="place"
            defaultValue={"DEFAULT"}
            style={{ margin: "30px 0" }}
          >
            <option disabled value="DEFAULT">
              Địa điểm
            </option>
            <option value="nhatrang">Nha Trang</option>
            <option value="phuquoc">Phú Quốc</option>
            <option value="dalat">Đà Lạt</option>
          </select>
          <div style={{ margin: "30px 0" }}>
            <p>Chọn ảnh</p>
            <FileBase64
              accept="image/*"
              multiple={false}
              type="file "
              value={createForm.attachment}
              onDone={({ base64 }) =>
                setCreateForm({ ...createForm, attachment: base64 })
              }
            />
            <span></span>
          </div>
          {createForm.attachment && (
            <img
              width={"25%"}
              height={"100%"}
              style={{ margin: "10px" }}
              src={createForm.attachment}
              alt=""
            />
          )}

          <img src="" alt="" />
          <button type="submit">Thêm sản phẩm</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
