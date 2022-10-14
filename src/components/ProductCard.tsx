import { AstroComponent } from 'astro/dist/runtime/server/render/astro';
import { IProduct } from '../types';
import { useState, useEffect, useRef } from 'preact/hooks';

interface IProductCardProps {
	product: IProduct;
}

//const { href, title, body, description,  image, rating, category } = Astro.props;

const ProductCard = ({ product }: IProductCardProps) => {
	const { id, title, category, body, description, image, rating } = product;
	const [toggle, setToggle] = useState(true);
	const [parHeight, setParHeight] = useState(0);
	const refDesc = useRef();

	const handleToggle = (e:MouseEvent) => {
		e.stopPropagation();
		//e.preventDefault();
		setToggle((prev) => !prev);
	};

	useEffect(() => {
			setParHeight(
				Number((refDesc.current as HTMLDivElement).getBoundingClientRect().height.toFixed(0))
			);
	}, []);

	return (
		<li class="link-card">
			<a
				href="javascript:void(null);"
				rel="noopener noreferrer"
				onClick={() => {
					window.location.href=`/product/${product.id}`;
				}}
			>
				<h2>
					{title}
					<span>&rarr;</span>
				</h2>
				{category && <h4>{category}</h4>}
				<button
					onClick={(e:MouseEvent) => handleToggle(e)}
					class="rounded-[15px] bg-gradient-to-br from-teal-500 to-teal-200 bg-teal-500 bg-no-repeat text-indigo-600 p-2 mt-2 z-0 transition-all ease-in duration-[0.1s] hover:bg-origin hover:z-10 flex flex-row"
					style={{ backgroundPosition: '-100px' }}
				>
					<span>{'Toggle'}&ensp;</span>
					<div
						style={{
							...(toggle
								? { transform: 'rotate(90deg)' }
								: { transform: 'rotate(0deg)' }),
						}}
					>
						<span>&rarr;</span>
					</div>
				</button>
				<div
					ref={refDesc}
					style={{
						...(toggle
							? { height: parHeight>0?parHeight:'', opacity: 1 }
							: { height: 0, opacity: 0 }),
					}}
				>
					<p>{body || description}</p>
				</div>
				{image && (
					<img
						class="object-cover my-5 transition-all duration-150 hover:scale-[1.05]"
						src={image}
					/>
				)}
				{rating && (
					<div class="w-full text-center p-4">
						<span class="rounded-lg text-1xl bg-slate-500 text-blue-300 hover:text-sky-400/75 hover:border-1 transition-all ease-in duration-[0.2s] font-bold p-2">
							{`Rate: ${rating.rate} of count: ${rating.count}`}
						</span>
					</div>
				)}
			</a>
		</li>
	);
};

export default ProductCard;
