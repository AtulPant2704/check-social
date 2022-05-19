import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ListItem, UnorderedList, ListIcon } from "@chakra-ui/react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const MobileNav = ({ onOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.auth);

  return (
    <UnorderedList
      listStyleType="none"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <ListItem
        cursor="pointer"
        fontSize="25px"
        color={`${pathname === "/home" ? "brand.500" : "white"}`}
        onClick={() => navigate("/home")}
      >
        <ListIcon as={FaHome} />
      </ListItem>
      <ListItem
        cursor="pointer"
        fontSize="25px"
        color={`${pathname === "/explore" ? "brand.500" : "white"}`}
        onClick={() => navigate("/explore")}
      >
        <ListIcon as={MdOutlineExplore} />
      </ListItem>
      <ListItem cursor="pointer" fontSize="25px" color="white" onClick={onOpen}>
        <ListIcon as={IoMdAddCircle} />
      </ListItem>
      <ListItem
        cursor="pointer"
        fontSize="25px"
        color={`${pathname === "/bookmarks" ? "brand.500" : "white"}`}
        onClick={() => navigate("/bookmarks")}
      >
        <ListIcon as={BsFillBookmarkFill} />
      </ListItem>
      <ListItem
        cursor="pointer"
        fontSize="25px"
        color={`${
          pathname.includes("/profile") && pathname.includes(`${user.username}`)
            ? "brand.500"
            : "white"
        }`}
        onClick={() => navigate(`/profile/${user.username}`)}
      >
        <ListIcon as={FaUserCircle} />
      </ListItem>
    </UnorderedList>
  );
};

export { MobileNav };
