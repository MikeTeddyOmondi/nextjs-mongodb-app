import Billboard from "@/components/Billboard";
import ProductMarquee from "@/components/product/ProductsMarqueeWrapper";
import CategoryCardSection from "@/components/category/CategoryCardSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container px-2">
      <Header />
      <Billboard />
      <ProductMarquee />
      <CategoryCardSection />
      <Footer />
    </main>
  );
}

// import { getTodos } from "@/lib/actions";
// import CreateTodo from "@/components/create-todo";
// import Todo from "@/components/todo";

// export default async function Home() {
//   const todos = await getTodos();
//   console.log(todos);

//   return (
//     <main className="flex min-h-screen flex-col items-center p-24">
//       <h1 className="text-3xl">NextJS & MongoDB | Todos App</h1>

//       <CreateTodo />

//       <section className="mt-20">
//         <div>Todos</div>

//         <div>
//           {todos &&
//             todos.map((todo) => {
//               const { _id, text } = todo;
//               return (
//                 <Todo text={text} key={_id.toString()} id={_id.toString()} />
//               );
//             })}
//         </div>
//       </section>
//     </main>
//   );
// }
