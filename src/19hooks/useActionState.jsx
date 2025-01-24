import { useActionState } from "react";

const updateName = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return name;
};

const UseActionState = () => {
  const [name, updateNameAction, isPending] = useActionState(
    async (previousName, formData) => {
      const newName = await updateName(formData.get("name"));
      return newName;
    },
    "LSJ"
  );

  return (
    <form action={updateNameAction}>
      현재 이름 {name}
      <br />
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        {isPending ? "업데이트 중..." : "업데이트"}
      </button>
    </form>
  );
};

export default UseActionState;
