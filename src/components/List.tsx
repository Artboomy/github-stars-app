import React from "react";
import {IRepositoryInfo} from "../types/declarations";

interface IProps {
   items: IRepositoryInfo[];
}

function List(props: IProps) {
   const mapped = props.items.map((item, idx) => {
      return <div key={item.id} style={{padding: '4px'}}>{idx + 1}. {item.full_name}</div>
   });
   return (
      <div style={{display: "flex", flexDirection: "column"}}>
         {mapped}
      </div>
   );
}

export default List
