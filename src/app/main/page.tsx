import Link from 'next/link';
import Breadcrumb from "../components/breadcrumb"

export default function main(props) {
  console.log(props.breadcrumb)
  return (
    <div>
      <div className="flex flex-row p-2 m-1">
        <div className="basis-1/4 p-2 m-1">
          <Link 
            href="/main/fontsize"
          >
            fontsize
          </Link>
          <br />
        </div>
        <div className="basis-3/4 p-2 m-1">
        <p>aaa</p>
        </div>
      </div>
    </div>
  )
}
