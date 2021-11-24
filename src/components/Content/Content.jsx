import styles from "./Content.module.css"

const data = [{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RzTZv3NNtD9PvGtd9WxT4HDRF47DKFIybw&usqp=CAU",
  name: "Sam Rose", city: "Napal", title: "Thailand - Hotel", sent: "Sent", date: "12 October 2021", status: "Accepted", r: "12345EFG"
},
{
  img: "https://images.squarespace-cdn.com/content/v1/5775c65d5016e1d65c1d815a/1525365844881-IVV7LMKGIEK154XSF0CI/Passport-Photos-Man+%282%29.jpg",
  name: "Bill Clay", city: "United Kingdom", title: "Dubia - Flight", sent: "Draft saved", date: "14 September 2021", status: "Not Sent", r: "12345ABC"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RzTZv3NNtD9PvGtd9WxT4HDRF47DKFIybw&usqp=CAU",
  name: "Sam Rose", city: "Napal", title: "Thailand - Hotel", sent: "Sent", date: "12 October 2021", status: "Accepted", r: "12345EFG"
},
{
  img: "https://images.squarespace-cdn.com/content/v1/5775c65d5016e1d65c1d815a/1525365844881-IVV7LMKGIEK154XSF0CI/Passport-Photos-Man+%282%29.jpg",
  name: "Bill Clay", city: "United Kingdom", title: "Dubia - Flight", sent: "Draft saved", date: "14 September 2021", status: "Not Sent", r: "12345ABC"
}]

const Row = ({ r, img, name, city, title, sent, date, status }) => (
  <>
    <div className={styles.rowBlock}><span>Ref:</span>{r}</div>
    <div className={styles.rowBlock}>
      <img src={img} alt="" />
      <div><span>{name}</span>{city}</div>
    </div>
    <div className={styles.rowBlock}><span>Proposal Title:</span>{title}</div>
    <div className={styles.rowBlock}><span>{sent}:</span>{date}</div>
    <div className={`${styles.rowBlock} ${status === "Accepted" ? styles.accepted : ""}`}><span>Status:</span>{status}</div>
  </>
)

const Content = () => (
  <>
    {data.map((d, idx) => (
      <Row key={`${idx}-row`} r={d.r} img={d.img} name={d.name} city={d.city} title={d.title} sent={d.sent} date={d.date} status={d.status} />
    ))}
  </>
)

export default Content