export default function Notification({ title, msg, type, closeNotification }) {
  return (
    <div className={type}>
      <h2>{title}</h2>
      <p>{msg}</p>
      <button className="button" onClick={closeNotification}>Okay</button>
    </div>
  );
}