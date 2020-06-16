import React from "react";
import {IRepositoryInfo} from "../types/declarations";
import {Item} from "semantic-ui-react";

interface IProps {
   items: IRepositoryInfo[];
}

function List(props: IProps) {
   const mapped = props.items.map((item, idx) => {
      return (
         <Item key={item.id}>
            <Item.Image size={'tiny'} src={item.owner.avatar_url}/>
            <Item.Content>
               <Item.Header as={'a'} href={item.html_url}>
                  {item.name}
               </Item.Header>
               <Item.Description>
                  {item.description}
               </Item.Description>
               <Item.Extra>
                  Stars: {item.stargazers_count} Forks: {item.forks_count} Issues: {item.open_issues_count}
               </Item.Extra>
            </Item.Content>
         </Item>
      );
   });
   return (
      <Item.Group>
         {mapped}
      </Item.Group>
   );
}

export default List
