// import { menuDe } from "../API/menuDe";
import { menuEng } from "../API/menuEng";

export function Menu() {
  return (
    <>
      <ul>
        {menuEng && (
          <li>{[...new Set(menuEng.map((item) => item.category))]}</li>
        )}
        {/* {menuDe && menuDe.map(())} */}
      </ul>
    </>
  );
}
