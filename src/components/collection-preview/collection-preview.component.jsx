import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((_i, idx) => idx < 4)
				.map(({ id, ...itemProps }) => (
					<CollectionItem key={id} {...itemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;