import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    setSearchParams({ title: searchValue });
    navigate(`/search?title=${searchValue}`);
  };
  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <GoSearch />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button mx={2} onClick={handleClick} colorScheme="blue">
          Search
        </Button>
      </InputGroup>
    </>
  );
};

export default SearchBar;
