function List() {
  return (
    <>

      {/* {myData.access_token.length == '' ? <Link to="/login" className="nav-link"><FontAwesomeIcon icon={faRightToBracket} /> Login</Link> : <Link to="/myprofile" onClick={handleOpen} className="nav-link myprofile dropdown " data-bs-toggle="dropdown" aria-expanded="false"><FaUser className="userIcon" />Myprofile</Link>}
                  {open ?
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/profile">Dashbord</Link></li>
                      <li><Link className="dropdown-item" to="/profile">My Business</Link></li>
                      <li><Link className="dropdown-item" to="/myprofile">My Profile</Link></li>
                      <li><Link className="dropdown-item" to="/password">Change Password</Link></li>
                      <li><Link className="dropdown-item" to="/password">Log Out</Link></li>
                    </ul>
                    : ''} */}
      this is list page
      <div class="">
        <li class="dropdown " type="" data-bs-toggle="dropdown" aria-expanded="false">
          myprofile
        </li>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </>
  )
}
export default List;