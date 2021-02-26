async function getUserInfo() {
  try {
    console.log('Getting User');
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    console.log(clientPrincipal);
    return clientPrincipal;
  } catch (error) {
    console.error('No profile could be found');
    return undefined;
  }
}

export { getUserInfo as default };
