import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { toast } from "sonner";

export default function UpdateBook({
  id,
  p_title,
  p_description,
  p_published_year,
  getBooks,
  currentPage,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title: p_title,
    description: p_description,
    published_year: p_published_year,
  });

  const postData = {
    book_id: id,
    title: formData.title,
    description: formData.description,
    published_year: formData.published_year,
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `http://localhost:4000/api/updateBook`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(postData));
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        console.log(xhr);
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          if (json_obj.message === "success") {
            getBooks(currentPage);
            handleClose();
            toast.success("Book Edited");
          } else {
            toast.error("There is something wrong");
            console.error(json_obj.message);
          }
        } else if (xhr.status === 500) {
          toast.error("Server Error");
          console.error(json_obj.message);
        } else {
          toast.error("There is something wrong");
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function () {
      toast.error("There is something wrong");
      console.error(xhr.statusText);
    };
  };

  return (
    <div className="post-api">
      <Button variant="outline-light" onClick={handleShow}>
        <UpdateIcon />
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Container>
          <Modal.Header>
            <Modal.Title>Update Post</Modal.Title>
          </Modal.Header>

          <form onSubmit={handleEdit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Title
              </label>
              <input
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                }}
                value={formData.title}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                description
              </label>
              <textarea
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                }}
                value={formData.description}
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                published_year
              </label>
              <input
                onChange={(e) => {
                  setFormData({ ...formData, published_year: e.target.value });
                }}
                value={formData.published_year}
                type="number"
                className="form-control"
              />
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </Modal.Footer>
          </form>
        </Container>
      </Modal>
    </div>
  );
}

const UpdateIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="blue"
      className="bi bi-pencil"
      viewBox="0 0 16 16"
    >
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
    </svg>
  );
};
