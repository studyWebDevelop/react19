import { useOptimistic, useState } from "react";

const submitTitle = async (formData) => {
  return new Promise((resolve, reject) => {
    const updatedTitle = formData.get("title");

    setTimeout(() => {
      const n = Math.random();
      if (n < 0.75) {
        resolve(updatedTitle);
      } else reject("error");
    }, 1000);
  });
};

const UseOptimistic = () => {
  const [title, setTitle] = useState("제목");
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(title);
  const [error, setError] = useState(null);
  const pending = title !== optimisticTitle;

  const handleSubmit = async (formData) => {
    setError(null);
    setOptimisticTitle(formData.get("title"));

    try {
      const upDateTime = await submitTitle(formData);
      setTitle(upDateTime);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      <h2>{optimisticTitle}</h2>
      <p>{pending && "업데이트 중..."}</p>
      <form action={handleSubmit}>
        <input name="title" />
        <button type="submit" disabled={pending}>
          제출
        </button>
      </form>
      <div>{error && error}</div>
    </div>
  );
};

export default UseOptimistic;
