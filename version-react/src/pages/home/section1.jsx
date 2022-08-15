export default function section1() {
  return (
    <div>
      <p>
        Some examples in the documentation use style for convenience, but using
        the style attribute as the primary means of styling elements is
        generally not recommended. In most cases, className should be used to
        reference classes defined in an external CSS stylesheet. style is most
        often used in React applications to add dynamically-computed styles at
        render time. See also FAQ: Styling and CSS.
      </p>
      <br />
      <p>
        The style attribute accepts a JavaScript object with camelCased
        properties rather than a CSS string. This is consistent with the DOM
        style JavaScript property, is more efficient, and prevents XSS security
        holes. For example:
      </p>
    </div>
  );
}
