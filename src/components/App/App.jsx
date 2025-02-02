import "../App/App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const isError = useSelector((state) => state.contacts.isError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}
      <ContactList />
    </div>
  );
}
