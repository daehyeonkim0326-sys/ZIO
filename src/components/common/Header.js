import "./Header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { CgProfile } from "react-icons/cg"
import { useAuth } from "../../contexts/AuthContext";
import Logo from "../../assets/images/logo/zio-logo.png"; // 경로는 너 프로젝트 맞춰

<<<<<<< HEAD
const Header = ({keyword,
    setKeyword,
    onOpen,
    onOpenpopup}) => {
  
=======
const Header = ({ onOpenPopup, keyword, setKeyword }) => {
>>>>>>> b41e89754e9567975a831964e2fcbcd43ed0c495
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/", { replace: true })
  }
  const location = useLocation()

  const isMain = location.pathname === "/"

  return (
    <header>
      {/* 로고 */}
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
       {isMain && (
<<<<<<< HEAD
    <input
          className={`input ${onOpen ? "active" : ""}`}
          type="text"
          placeholder="주차장을 찾아보세요"
          value={keyword}
          onFocus={onOpenpopup}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onOpenpopup()
          }}
        />
=======
     <input
      placeholder="주차장을 찾아보세요"
      value={keyword}
      readOnly
      onFocus={onOpenPopup}
      // 또는 onClick={onOpenPopup}
    />
>>>>>>> b41e89754e9567975a831964e2fcbcd43ed0c495
     )}
      {/* 로그인 상태 분기 */}
      {user ? (
        <div className="login">
          

          
          {/* <button>{user.userId ?? user.id ?? "USER"}</button> */}

          <button
            type="button"
            onClick={handleLogout}
            style={{ marginLeft: 12 }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <Link to="/auth">
          <div className="login">
            <div className="icon">
              <button>
                <CgProfile />
                <p>로그인</p>
              </button>
            </div>
          </div>
        </Link>
      )}
    </header>
  )
}

export default Header