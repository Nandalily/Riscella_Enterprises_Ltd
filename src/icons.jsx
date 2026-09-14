const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ children, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      {children}
    </svg>
  )
}

export function Icon({ name, size = 20 }) {
  const paths = {
    flask: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6.2L5.8 17.5A3.4 3.4 0 0 0 8.8 22h6.4a3.4 3.4 0 0 0 3-4.5L14 9.2V3" />
        <path d="M8.2 15h7.6" />
      </>
    ),
    beaker: (
      <>
        <path d="M6 3h12" />
        <path d="M8 3v5.2L4.8 18.2A2.8 2.8 0 0 0 7.5 22h9a2.8 2.8 0 0 0 2.7-3.8L16 8.2V3" />
        <path d="M7.5 15h9" />
      </>
    ),
    filter: (
      <>
        <path d="M4 5h16l-6.2 7.4V19l-3.6 2v-8.6L4 5z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v6.2c0 4 2.8 7.4 7 8.8 4.2-1.4 7-4.8 7-8.8V6l-7-3z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m8.5 13.5-1.5 7 5-2.4 5 2.4-1.5-7" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V10l5 3V10l5 3V8h4v13" />
        <path d="M15 5v3" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M16 19a4.4 4.4 0 0 1 4.5-4.2" />
      </>
    ),
    clipboard: (
      <>
        <rect x="6" y="5" width="12" height="16" rx="2" />
        <path d="M9 5V4h6v1" />
        <path d="M9 11h6M9 15h4" />
      </>
    ),
    pill: (
      <>
        <path d="m10.5 3.5 10 10a3.5 3.5 0 0 1-5 5l-10-10a3.5 3.5 0 0 1 5-5z" />
        <path d="m9 14 5-5" />
      </>
    ),
    microscope: (
      <>
        <path d="M6 21h12" />
        <path d="M9 21V9a3 3 0 0 1 6 0" />
        <path d="M15 12h3a2 2 0 0 1 0 4h-1" />
        <circle cx="12" cy="6" r="2" />
      </>
    ),
    grad: (
      <>
        <path d="m3 9 9-5 9 5-9 5-9-5z" />
        <path d="M7 11.5v4.2L12 18l5-2.3v-4.2" />
        <path d="M21 9v6" />
      </>
    ),
    file: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
    snow: (
      <>
        <path d="M12 3v18M5.5 7.5l13 9M5.5 16.5l13-9" />
        <path d="m9 4.5 3-1.5 3 1.5M9 19.5 12 21l3-1.5" />
      </>
    ),
    package: (
      <>
        <path d="m3 8 9-5 9 5v9l-9 5-9-5z" />
        <path d="M12 13v9M3 8l9 5 9-5" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <>
        <path d="M7 3h4l1.5 4-2.4 1.6a12 12 0 0 0 5.3 5.3L17 11.5 21 13v4a2 2 0 0 1-2.2 2A16 16 0 0 1 3 7.2 2 2 0 0 1 5 5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V6l8-3 8 3v15" />
        <path d="M9 21V12h6v9" />
        <path d="M9 8h.01M15 8h.01M9 16h.01M15 16h.01" />
      </>
    ),
  }

  return <Svg size={size}>{paths[name]}</Svg>
}
