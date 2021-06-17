declare module '*.svg' {
	const content: any;
	export default content;
}

type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;
