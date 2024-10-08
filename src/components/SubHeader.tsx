import { FiMenu } from "react-icons/fi";
import { toggleSideBar } from "../store/appSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

const SubHeader: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (category: string | null) => {
        if (category) {
            navigate("/products/search?c=" + category);
        }
    };

    return (
        <div
            className="bg-sky-900 px-2.5 py-2.5 sm:px-4 text-white flex items-center font-semibold">
            <div
                className="flex items-center mr-6 cursor-pointer"
                onClick={() => dispatch(toggleSideBar())}
            >
                <FiMenu className="text-2xl mr-2" />
                <span className="ml-1">All</span>
            </div>

            <ul className="flex items-center">
                <li
                    className="mr-6 cursor-pointer"
                    data-value={"smartphones"}
                    onClick={(e) =>
                        handleClick(e.currentTarget.getAttribute("data-value"))
                    }
                >
                    Mobiles
                </li>
                <li
                    className="mr-6 cursor-pointer"
                    data-value={"sports-accessories"}
                    onClick={(e) =>
                        handleClick(e.currentTarget.getAttribute("data-value"))
                    }
                >
                    Sports
                </li>
                <li
                    className="mr-6 cursor-pointer"
                    data-value={"sunglasses"}
                    onClick={(e) =>
                        handleClick(e.currentTarget.getAttribute("data-value"))
                    }
                >
                    Sunglasses
                </li>
                <li
                    className="mr-6 cursor-pointer hidden sm:block"
                    data-value={"mens-watches"}
                    onClick={(e) =>
                        handleClick(e.currentTarget.getAttribute("data-value"))
                    }
                >
                    Watches
                </li>
            </ul>
        </div>
    );
};

export default SubHeader;
