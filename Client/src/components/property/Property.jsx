import React, {useState, useEffect} from "react";
import {TiArrowSortedUp, TiArrowSortedDown} from "react-icons/ti";
import {useDispatch, useSelector} from "react-redux";
import demo from "../../assets/prop-bg.jpg";
import Banner from "../banner/Banner";
import bg from "../../assets/bg.jpg";
import {sortByPriceAsc, sortByPriceDsc} from "../../redux/slice/propertySlice";
import "./Property.css";
import axios from "axios";

import Card from "../propCard/Card";
import FilterCard from "../filterCard/FilterCard";
import Loading from "../loading/Loading";
const Property = () => {
	const [property ,setProperty] =useState([])
	const [loading,setLoading] = useState(true)
	const getData = async () => {
		try {
			const res = await axios.get('http://localhost:5000/property');
			const data = res.data.property;
			console.log(data);
			setProperty(data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);
			// Handle the error, e.g., set an error state
			setLoading(false);
		}
	};
	

	const data = useSelector((state) => state.property);
	useEffect(() => {
		getData();
	}, []);	
	const dispatch = useDispatch();
	const sortByPrice = () => {
		dispatch(sortByPriceAsc());
	};
	const sortByPriceDesc = () => {
		dispatch(sortByPriceDsc());
	};

	return (
		<>
		{
			loading ?<Loading/>:
			<div>
				<Banner text={"Reimagine your Home"} imageUrl={bg} />
				<div className="prop-cont my-20 px-2 md:px-24">
					<div className="left-cont   top-0">
						<FilterCard />
					</div>
					<div className="">
						<div className="content-head flex justify-between">
							<div>All results {data.products.length}</div>
							<div className="sort-cont flex items-center">
								<h5>Price</h5>
								<div className="sort-action-btn flex  flex-col text-xl">
									<TiArrowSortedUp
										onClick={sortByPrice}
									/>
									<TiArrowSortedDown
										onClick={sortByPriceDesc}
									/>
								</div>
							</div>
						</div>
						<div className="">
							{property&&property.map((item) => (
								<div key={item._id}>
									<Card item={item} imageUrl={demo} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>		
		}
		</>
	);
};

export default Property;
