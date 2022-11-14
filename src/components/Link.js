/** @jsx jsx */
import { jsx, Link as ThemeUILink } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

function Link({ to, children, ...props }) {
  const sx = {
    color: "primary",
  };

  if (to && to.startsWith("http")) {
    const aProps = {
      ...props,
      rel: props.target === "_blank" && "noopener noreferrer",
    };
    return <a href={to} {...aProps} sx={sx}>{children}</a>;
  }

  if (to) {
    return (
      <GatsbyLink to={to} {...props} activeClassName="is-active" sx={sx}>{children}</GatsbyLink>
    );
  }

  return <ThemeUILink {...props} sx={sx}>{children}</ThemeUILink>;
}

export default Link;
