export default function Notification({ title, message, type, closeNotification }) {
  return (
    <div className={type}>
      <h2>{title}</h2>
      {message.split('\n').map((item, i) => <p key={i + item.slice(0,2)}>{item}</p>)}

      <div className="modal-actions"><button className="button" onClick={closeNotification}>Okay</button></div>
    </div>
  );
}