// import { menuDe } from "../API/menuDe";
import { menuEng, MenuEng } from "../API/menuEng";
import { useState } from "react";

export function Menu() {
  const [mainCourse, setMainCourse] = useState<MenuEng[]>([]);

  function handleShowImg() {
    if (mainCourse.length > 0) {
      setMainCourse([]);
    } else {
      const filteredMainCourse = menuEng.filter(
        (item) => item.category === "Main Course"
      );
      setMainCourse(filteredMainCourse);
    }
  }

  return (
    <>
      <ul>
        <h1>Main Course</h1>
        <img
          onClick={handleShowImg}
          src="https://images.pexels.com/photos/3791089/pexels-photo-3791089.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1"
          alt="Show Main Course"
        />
        {mainCourse.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
