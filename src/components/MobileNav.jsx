import { useNavigate, useLocation } from "react-router-dom";
import { ListItem, UnorderedList, ListIcon } from "@chakra-ui/react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const MobileNav = ({ onOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <UnorderedList
      listStyleType="none"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <ListItem>
        <ListIcon
          as={FaHome}
          fontSize="25px"
          color={`${pathname === "/home" ? "brand.500" : "white"}`}
          onClick={() => navigate("/home")}
        />
      </ListItem>
      <ListItem
        cursor="pointer"
        fontSize="25px"
        color={`${pathname === "/explore" ? "brand.500" : "white"}`}
      >
        <ListIcon as={MdOutlineExplore} />
      </ListItem>
      <ListItem cursor="pointer" fontSize="25px" color="white" onClick={onOpen}>
        <ListIcon as={IoMdAddCircle} />
      </ListItem>
      <ListItem
        cursor="pointer"
        fontSize="25px"
        color={`${pathname === "/bookmark" ? "brand.500" : "white"}`}
      >
        <ListIcon as={BsFillBookmarkFill} />
      </ListItem>
      <ListItem
        cursor="pointer"
        fontSize="25px"
        onClick={() => navigate("/profile")}
        color={`${pathname === "/profile" ? "brand.500" : "white"}`}
      >
        <ListIcon as={FaUserCircle} />
      </ListItem>
    </UnorderedList>
  );
};

export { MobileNav };
