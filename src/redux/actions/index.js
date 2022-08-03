export const TYPE_EMAIL = 'TYPE_EMAIL';
// Coloque aqui suas actions
const dispatchEmailToStore = (email) => ({
  type: TYPE_EMAIL,
  email,
});

export default dispatchEmailToStore;
