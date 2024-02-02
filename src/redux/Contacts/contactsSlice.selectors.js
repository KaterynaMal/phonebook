import { createSelector } from "@reduxjs/toolkit";

const selectContacts = state => state.contacts;

export const selectContactItem = createSelector(selectContacts, contacts => contacts.items);

export const selectFilterContact = createSelector(selectContacts, contacts => contacts.filter)