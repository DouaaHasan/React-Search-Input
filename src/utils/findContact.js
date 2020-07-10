export const findContact = (contacts, contact) => {
  const regex = new RegExp(`^${contact}`, "gi");
  return (
    contacts !== null &&
    contacts.filter(
      (contact) => typeof contact.name === "string" && contact.name.match(regex)
    )
  );
};
