import "../styles/List.css";
import React, { useState } from "react";
import { connect,useSelector,useDispatch } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";
import CardEditor from "./CardEditor";
import ListEditor from "./ListEditor";
import shortid from "shortid";

const List = ({ list, index, listId }) => {
    const list1 = useSelector((state) => state.listsById);
    const dispatch = useDispatch();
  const [editingTitle, setEditingTitle] = useState(false);
  const [title, setTitle] = useState(list.title);
  const [addingCard, setAddingCard] = useState(false);

  const toggleAddingCard = () => setAddingCard(!addingCard);

  const addCard = async (cardText) => {
    const cardId = shortid.generate();

    dispatch({
      type: "ADD_CARD",
      payload: { cardText, cardId, listId },
    });

    toggleAddingCard();
  };

  const toggleEditingTitle = () => setEditingTitle(!editingTitle);

  const handleChangeTitle = (e) => setTitle(e.target.value);

  const editListTitle = async () => {
    dispatch({
      type: "CHANGE_LIST_TITLE",
      payload: { listId, listTitle: title },
    });

    toggleEditingTitle();
  };

  const deleteList = async () => {
    if (window.confirm("Are you sure to delete this list?")) {
      dispatch({
        type: "DELETE_LIST",
        payload: { listId, cards: list.cards },
      });
    }
  };

  return (
    <Draggable draggableId={list._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="List"
        >
          {editingTitle ? (
            <ListEditor
              list={list}
              title={title}
              handleChangeTitle={handleChangeTitle}
              saveList={editListTitle}
              onClickOutside={editListTitle}
              deleteList={deleteList}
            />
          ) : (
            <div className="List-Title" onClick={toggleEditingTitle}>
              {list.title}
            </div>
          )}

          <Droppable droppableId={list._id}>
            {(provided, _snapshot) => (
              <div ref={provided.innerRef} className="Lists-Cards">
                {list.cards &&
                  list.cards.map((cardId, index) => (
                    <Card
                      key={cardId}
                      cardId={cardId}
                      index={index}
                      listId={list._id}
                    />
                  ))}

                {provided.placeholder}

                {addingCard ? (
                  <CardEditor
                    onSave={addCard}
                    onCancel={toggleAddingCard}
                    adding
                  />
                ) : (
                  <div className="Toggle-Add-Card" onClick={toggleAddingCard}>
                    <ion-icon name="add" /> Add a card
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};



export default List;