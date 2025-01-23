import Error404 from "@/components/404error";
import Header2 from "@/components/Header2";
import SignIn from "@/components/signin";

export default function shop() {
  return (
    <div>
      <Header2/>
      <Error404 />
      <SignIn />
    </div>
  );
}