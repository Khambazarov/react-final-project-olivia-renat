// import { NavLink, Outlet, useParams } from "react-router-dom";
// import { menuEng } from "../../API/menuEng";

// export const Category = ({ path }: { path: string}) => {
//   const params = useParams();
//   console.log(params);

//   if (!params.id) {
//     return <div>Invalid path</div>;
//   }

//   const result = menuEng
//     .find((item) => item.path === path)
//     ?.dishes.map((item) => (
//       <NavLink to={item.id} key={item.id}>
//         <h2>
//           {item.name}
//           <span>{item.price}</span>
//         </h2>
//         <p>{item.description}</p>
//         <img src={item.img} alt={item.name} />
//         <p>{item.allergens}</p>
//       </NavLink>
//     ));

//   return (
//     <>
//       {result}
//       <Outlet />
//     </>
//   );
// };
