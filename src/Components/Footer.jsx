import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

export function FooterHome() {
  return (
    <section className="text-white text-center">
      <div className="bg-cyan-400/10 border border-white/20 py-14 font-NuevaStd">
        {/*------------------------------------- */}
        {/*Logo Info*/}
        <ul className="flex justify-center gap-1">
          <li><img src="/cfg logo/Logo(white).png" className="w-12"/></li>
          <li className="my-auto">Guinart's Databases</li>
        </ul>
        {/*#end Logo Info */}
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/*Company Info*/}
        <div className="text-sm flex justify-center gap-3 mt-1">
          <p>
            © 2023 by Guinart's Databases. Powered and secured by LeCharles.
          </p>
        </div>
        {/*#end Company Info */}
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/*Community Info*/}
        <ul className="flex justify-center gap-3 text-2xl mt-2">
          <li>
            <button>
              <AiFillTwitterCircle />
            </button>
          </li>
          <li>
            <button>
              <AiFillFacebook />
            </button>
          </li>
          <li>
            <button>
              <AiFillInstagram />
            </button>
          </li>
        </ul>
        {/*#end Community Info */}
        {/*------------------------------------- */}
      </div>
    </section>
  );
}
