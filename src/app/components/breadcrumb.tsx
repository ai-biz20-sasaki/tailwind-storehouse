import Link from 'next/link';

export default function Breadcrumb(props) {
  const { isNavbar, pos } = props;
  return (
    <div>
      {isNavbar ? (
        <p>ここにぱんくずを表示する:{pos}</p>
      ) : (
        <p></p>
      )}      
    </div>
  )
}
