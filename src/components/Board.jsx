import "../styles/Board.css";
import React, { useState } from "react";
import { connect,useSelector,useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import List from "./List";
import AddList from "./AddList";

const Board = () => {

  const boards = useSelector((state) => state.boards);
  
  const listIds = useSelector((state) => state.listsById);
  listIds = [{
    "4pfFg9gq0":
    {_id: "4pfFg9gq0", title: "First list", cards: ["FjYMrcRlui", "isDHsEIEfH"]},
    "NhZv3K2MQn":{_id: "4pfFg9gq0", title: "First list", cards: ["FjYMrcRlui", "isDHsEIEfH"]}
  }]
  const dispatch = useDispatch();
 
  const [addingList, setAddingList] = useState(false);

  const toggleAddingList = () => setAddingList(!addingList);

  const handleDragEnd = ({ source, destination, type }) => {
    if (!destination) return;

    if (type === "COLUMN") {
      if (source.index !== destination.index) {
        dispatch({
          type: "MOVE_LIST",
          payload: {
            oldListIndex: source.index,
            newListIndex: destination.index
          }
        });
      }
      return;
    }

    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      dispatch({
        type: "MOVE_CARD",
        payload: {
          sourceListId: source.droppableId,
          destListId: destination.droppableId,
          oldCardIndex: source.index,
          newCardIndex: destination.index
        }
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided, _snapshot) => (
          <div className="Board" ref={provided.innerRef}>
            {boards.lists.map((listId, index) => {
                
              return <List listId={listIds} key={listId} index={index} />;
            })}
            {provided.placeholder}
            <div className="Add-List">
              {addingList ? (
                <AddList toggleAddingList={toggleAddingList} />
              ) : (
                <div onClick={toggleAddingList} className="Add-List-Button">
                  <ion-icon name="add" /> Add a list
                </div>
              )}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({ board: state.board });

export default Board;