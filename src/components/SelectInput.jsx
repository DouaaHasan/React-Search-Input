import React, { useState, useEffect, useRef, useContext } from "react";
// context
import { AppContext } from "../context/AppContext";
// utils
import { findContact } from "../utils/findContact";
// styled
import { Input, Label, Icon, MainWrapper, Ul, Li } from "../style/Styled";

const SelectInput = () => {
  // context
  const { contacts } = useContext(AppContext);
  // state
  const [selectedContact, setSelectedContact] = useState("");
  const [clicked, setClicked] = useState(false);
  const [showOptions, toggleOptions] = useState(false);
  const wrapperRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (e) => {
    if (selectedContact === "") {
      setClicked(false);
    }

    const { current } = wrapperRef;
    if (current && !current.contains(e.target)) {
      toggleOptions(false);
    }
  };

  // setSelected(e.target.value)
  const handleChange = (e) => {
    setSelectedContact(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, selectedContact]);

  return (
    <>
      <MainWrapper>
        {clicked && !selectedContact && (
          <Icon search className="fas fa-search" />
        )}

        <Input
          placeholder={(clicked && "Type or search...") || ""}
          onChange={(e) => {
            handleChange(e);
          }}
          onFocus={() => {
            setClicked(true);
          }}
          onClick={() => {
            toggleOptions(true);
            setSelectedContact("");
          }}
          value={selectedContact && selectedContact}
          autoComplete="off"
        />

        <Icon chevron className="fas fa-chevron-down" />

        {clicked ? <Label focusMode>Contact</Label> : <Label>Contact</Label>}
      </MainWrapper>

      {showOptions && (
        <Ul ref={wrapperRef}>
          {findContact(contacts, selectedContact).length <= 0 ? (
            <Li>There is no match</Li>
          ) : (
            findContact(contacts, selectedContact)
              .sort((a, b) => a.name !== null && a.name.localeCompare(b.name))
              .map(
                (contact, index) =>
                  contact.name !== null && (
                    <Li
                      key={index}
                      onClick={(e) => {
                        setSelectedContact(contact.name);
                        setClicked(true);
                        toggleOptions(false);
                      }}
                    >
                      {contact.name}
                    </Li>
                  )
              )
          )}
        </Ul>
      )}
    </>
  );
};

export default SelectInput;
