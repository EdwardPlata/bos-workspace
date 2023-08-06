const hasPrev = props.hasPrev ?? false;
const hasNext = props.hasNext ?? true;
const onNext = props.onNext ?? (() => {});
const onPrev = props.onPrev ?? (() => {});
const hrefNext = props.nextHref;
const hrefPrev = props.nextHref;

const Button = styled[hrefNext ? "a" : "button"]`
  text-align: center;
  background: #fff;
  border-radius: 100px;
  padding: 16px 30px;
  min-width: 180px;
  max-width: 49%;
  display: inline-flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border: none;
  background: rgba(255, 255, 255, 0.376);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.75rem 2rem 0px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  margin-top: 7px;
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
  color: #444;
  transition: all 250ms ease;

  &:hover {
    transform: scale(1.05) translateY(-1px);
  }

  &:active {
    transform: scale(0.95) translateY(-1px);
  }

  svg {
    fill: #444;
  }

  &[disabled] {
    cursor: default;
    color: #ccc;
    transform: none !important;

    svg {
      fill: #bbb;
    }
  }
`;

return (
  <>
    <Button
      className="me-3"
      disabled={!hasPrev}
      onClick={onPrev}
      href={hrefPrev}
    >
      <svg height="14.70" viewBox="0 0 28 9" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.0009 4.50063C28.0009 4.36802 27.9482 4.24085 27.8544 4.14708C27.7607 4.05331 27.6335 4.00063 27.5009 4.00063H1.70789L4.85489 0.854632C4.90138 0.808144 4.93826 0.752955 4.96342 0.692215C4.98858 0.631476 5.00153 0.566375 5.00153 0.500632C5.00153 0.434888 4.98858 0.369788 4.96342 0.309048C4.93826 0.248309 4.90138 0.193119 4.85489 0.146631C4.80841 0.100144 4.75322 0.0632674 4.69248 0.0381083C4.63174 0.0129493 4.56664 0 4.50089 0C4.43515 0 4.37005 0.0129493 4.30931 0.0381083C4.24857 0.0632674 4.19338 0.100144 4.14689 0.146631L0.146894 4.14663C0.100331 4.19308 0.0633877 4.24825 0.0381812 4.309C0.0129748 4.36974 0 4.43486 0 4.50063C0 4.5664 0.0129748 4.63152 0.0381812 4.69226C0.0633877 4.75301 0.100331 4.80819 0.146894 4.85463L4.14689 8.85463C4.19338 8.90112 4.24857 8.938 4.30931 8.96315C4.37005 8.98831 4.43515 9.00126 4.50089 9.00126C4.56664 9.00126 4.63174 8.98831 4.69248 8.96315C4.75322 8.938 4.80841 8.90112 4.85489 8.85463C4.90138 8.80814 4.93826 8.75295 4.96342 8.69221C4.98858 8.63148 5.00153 8.56638 5.00153 8.50063C5.00153 8.43489 4.98858 8.36979 4.96342 8.30905C4.93826 8.24831 4.90138 8.19312 4.85489 8.14663L1.70789 5.00063H27.5009C27.6335 5.00063 27.7607 4.94795 27.8544 4.85419C27.9482 4.76042 28.0009 4.63324 28.0009 4.50063Z" />
      </svg>
      Previous
    </Button>
    <Button disabled={!hasNext} onClick={onNext} href={hrefNext}>
      Next
      <svg height="14.70" viewBox="0 0 28 9" xmlns="http://www.w3.org/2000/svg">
        <path d="M-3.8147e-05 4.50065C-3.8147e-05 4.63326 0.0526399 4.76044 0.146408 4.8542C0.240176 4.94797 0.367354 5.00065 0.499962 5.00065H26.293L23.146 8.14665C23.0995 8.19314 23.0626 8.24833 23.0374 8.30907C23.0123 8.36981 22.9993 8.43491 22.9993 8.50065C22.9993 8.56639 23.0123 8.63149 23.0374 8.69223C23.0626 8.75297 23.0995 8.80816 23.146 8.85465C23.1924 8.90114 23.2476 8.93801 23.3084 8.96317C23.3691 8.98833 23.4342 9.00128 23.5 9.00128C23.5657 9.00128 23.6308 8.98833 23.6915 8.96317C23.7523 8.93801 23.8075 8.90114 23.854 8.85465L27.854 4.85465C27.9005 4.8082 27.9375 4.75303 27.9627 4.69228C27.9879 4.63154 28.0009 4.56642 28.0009 4.50065C28.0009 4.43488 27.9879 4.36976 27.9627 4.30902C27.9375 4.24827 27.9005 4.1931 27.854 4.14665L23.854 0.14665C23.8075 0.100162 23.7523 0.063286 23.6915 0.0381269C23.6308 0.0129679 23.5657 1.90735e-05 23.5 1.90735e-05C23.4342 1.90735e-05 23.3691 0.0129679 23.3084 0.0381269C23.2476 0.063286 23.1924 0.100162 23.146 0.14665C23.0995 0.193138 23.0626 0.248327 23.0374 0.309067C23.0123 0.369806 22.9993 0.434907 22.9993 0.50065C22.9993 0.566394 23.0123 0.631495 23.0374 0.692234C23.0626 0.752973 23.0995 0.808163 23.146 0.85465L26.293 4.00065H0.499962C0.367354 4.00065 0.240176 4.05333 0.146408 4.1471C0.0526399 4.24086 -3.8147e-05 4.36804 -3.8147e-05 4.50065Z" />
      </svg>
    </Button>
  </>
);