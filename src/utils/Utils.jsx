export const GetEmail = () => {
    const emailAddress = 'doguhannilt@mail.com';
    const subject = 'Title';
    const body = 'Content';
    const mailToLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailToLink;
  };

