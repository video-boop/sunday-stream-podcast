/* @ds-bundle: {"format":4,"namespace":"WhoIsJesusToYouDesignSystem_d51368","components":[{"name":"LowerThird","sourcePath":"components/broadcast/LowerThird.jsx"},{"name":"PlayerBar","sourcePath":"components/broadcast/PlayerBar.jsx"},{"name":"RevealFrame","sourcePath":"components/broadcast/RevealFrame.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"EpisodeCard","sourcePath":"components/editorial/EpisodeCard.jsx"},{"name":"QuoteBlock","sourcePath":"components/editorial/QuoteBlock.jsx"},{"name":"ScriptureRef","sourcePath":"components/editorial/ScriptureRef.jsx"}],"sourceHashes":{"components/broadcast/LowerThird.jsx":"845d4c0995d2","components/broadcast/PlayerBar.jsx":"f7424523f101","components/broadcast/RevealFrame.jsx":"a80cc21fd74c","components/core/Button.jsx":"e75230881286","components/core/Card.jsx":"0ae3a8a78534","components/core/SectionHeading.jsx":"816c037720fe","components/core/Tag.jsx":"7cab2984d6d9","components/editorial/EpisodeCard.jsx":"0c4abd4bd61e","components/editorial/QuoteBlock.jsx":"9f90e2c11f18","components/editorial/ScriptureRef.jsx":"7e49bf724c61","ui_kits/broadcast/Graphics.jsx":"a35678bc655b","ui_kits/website/About.jsx":"d3262c254c51","ui_kits/website/Chrome.jsx":"b64926d523ae","ui_kits/website/EpisodePage.jsx":"84273c316b1f","ui_kits/website/Home.jsx":"59aa1d196650"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WhoIsJesusToYouDesignSystem_d51368 = window.WhoIsJesusToYouDesignSystem_d51368 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/broadcast/LowerThird.jsx
try { (() => {
function LowerThird({
  name,
  role,
  ministry,
  variant = "ember",
  visible = true,
  question
}) {
  const bar = {
    ember: 'var(--grad-ember)',
    water: 'var(--grad-water)',
    revelation: 'var(--grad-revelation)'
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--safe-lower-third-x)',
      bottom: 'var(--safe-lower-third-y)',
      display: 'flex',
      alignItems: 'stretch',
      gap: 0,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(-24px)',
      transition: 'opacity var(--dur-slow) var(--ease-out-soft),transform var(--dur-slow) var(--ease-out-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      background: bar,
      borderRadius: '2px 0 0 2px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--scrim-panel)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      padding: '16px 28px 18px',
      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
      boxShadow: 'var(--shadow-lg)'
    }
  }, question && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 8
    }
  }, question), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 34px/1.05 var(--font-display)',
      color: 'var(--bone-100)'
    }
  }, name), (role || ministry) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: '500 14px/1 var(--font-ui)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, role && /*#__PURE__*/React.createElement("span", null, role), role && ministry && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: '50%',
      background: 'var(--text-muted)'
    }
  }), ministry && /*#__PURE__*/React.createElement("span", null, ministry))));
}
Object.assign(__ds_scope, { LowerThird });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/broadcast/LowerThird.jsx", error: String((e && e.message) || e) }); }

// components/broadcast/RevealFrame.jsx
try { (() => {
function RevealFrame({
  src,
  alt = "",
  revealed = false,
  caption,
  label = "Tap to reveal",
  radius = "var(--radius-lg)",
  onToggle,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: radius,
      cursor: onToggle ? 'pointer' : 'default',
      background: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: revealed ? 'none' : 'blur(38px) saturate(1.3) brightness(.7)',
      transform: revealed ? 'scale(1)' : 'scale(1.08)',
      transition: 'filter var(--dur-reveal) var(--ease-out-soft),transform var(--dur-reveal) var(--ease-out-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-scrim)',
      opacity: revealed ? .35 : .8,
      transition: 'opacity var(--dur-reveal) var(--ease-out-soft)'
    }
  }), !revealed && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--bone-100)',
      border: 'var(--border-width) solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      background: 'rgba(7,11,16,.4)',
      whiteSpace: 'nowrap'
    }
  }, label)), caption && revealed && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--space-5)',
      right: 'var(--space-5)',
      bottom: 'var(--space-5)',
      font: '400 var(--size-body-sm)/1.5 var(--font-quote)',
      fontStyle: 'italic',
      color: 'var(--bone-200)'
    }
  }, caption));
}
Object.assign(__ds_scope, { RevealFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/broadcast/RevealFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  font: 'var(--weight-bold) 14px/1 var(--font-ui)',
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  border: 'var(--border-width) solid transparent',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  whiteSpace: 'nowrap',
  transition: 'background var(--dur-base) var(--ease-standard),color var(--dur-base) var(--ease-standard),transform var(--dur-fast) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard)',
  textDecoration: 'none'
};
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 12
  },
  md: {
    padding: '13px 26px',
    fontSize: 14
  },
  lg: {
    padding: '17px 36px',
    fontSize: 15
  }
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--white)',
    boxShadow: 'var(--shadow-ember)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--bone-100)',
    borderColor: 'var(--border-strong)'
  },
  gold: {
    background: 'var(--accent-gold)',
    color: 'var(--ink-900)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)'
  },
  onLight: {
    background: 'var(--ink-900)',
    color: 'var(--bone-100)'
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  href,
  onClick,
  style,
  children
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const hover = !disabled && h ? {
    primary: {
      background: 'var(--brand-primary-hover)'
    },
    secondary: {
      borderColor: 'var(--accent-gold)',
      color: 'var(--accent-gold)'
    },
    gold: {
      background: 'var(--gold-400)'
    },
    ghost: {
      color: 'var(--bone-100)'
    },
    onLight: {
      background: 'var(--ink-700)'
    }
  }[variant] : null;
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover || {}),
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? .42 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    transform: p ? 'var(--press-scale)' : h && !disabled ? 'var(--lift-hover)' : 'none',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    disabled: !href ? disabled : undefined,
    style: s,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  surface = "dark",
  interactive = false,
  padding = "var(--space-5)",
  accent,
  style,
  children,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const dark = surface === "dark";
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: dark ? 'var(--surface-card)' : 'var(--surface-light-card)',
      border: 'var(--border-width) solid ' + (dark ? 'var(--border-hairline)' : 'var(--border-on-light)'),
      borderRadius: 'var(--radius-lg)',
      padding,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: h && interactive ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: h && interactive ? 'var(--lift-hover)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      color: dark ? 'var(--text-primary)' : 'var(--text-on-light)',
      ...style
    }
  }, accent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 3,
      background: accent === "water" ? 'var(--grad-water)' : accent === "revelation" ? 'var(--grad-revelation)' : 'var(--grad-ember)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  onLight = false,
  rule = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 720 : undefined,
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-regular) var(--size-display-3)/var(--lh-heading) var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: 0,
      color: onLight ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 3,
      background: 'var(--grad-ember)',
      margin: align === 'center' ? 'var(--space-4) auto 0' : 'var(--space-4) 0 0',
      borderRadius: 2
    }
  }), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) var(--size-body-lg)/var(--lh-body) var(--font-ui)',
      color: onLight ? 'var(--text-on-light-muted)' : 'var(--text-secondary)',
      marginTop: 'var(--space-4)',
      maxWidth: 620,
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const tones = {
  ember: {
    bg: 'rgba(232,81,30,.14)',
    fg: 'var(--ember-400)',
    bd: 'rgba(232,81,30,.4)'
  },
  gold: {
    bg: 'rgba(245,168,28,.14)',
    fg: 'var(--gold-400)',
    bd: 'rgba(245,168,28,.4)'
  },
  water: {
    bg: 'rgba(46,134,200,.14)',
    fg: 'var(--blue-300)',
    bd: 'rgba(46,134,200,.4)'
  },
  neutral: {
    bg: 'rgba(246,241,232,.07)',
    fg: 'var(--text-secondary)',
    bd: 'var(--border-hairline)'
  }
};
function Tag({
  tone = "neutral",
  solid = false,
  dot = false,
  children
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      font: 'var(--weight-bold) var(--size-eyebrow)/1 var(--font-ui)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.fg : t.bg,
      color: solid ? 'var(--ink-900)' : t.fg,
      border: 'var(--border-width) solid ' + (solid ? 'transparent' : t.bd)
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: solid ? 'var(--ink-900)' : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/broadcast/PlayerBar.jsx
try { (() => {
function PlayerBar({
  title,
  guest,
  progress = 0.34,
  playing = true,
  duration = "52:18",
  elapsed = "17:42",
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '14px var(--space-5)',
      background: 'var(--scrim-panel)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-label": playing ? 'Pause' : 'Play',
    style: {
      width: 44,
      height: 44,
      flex: '0 0 44px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--brand-primary)',
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-ember)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '16px/1 var(--font-ui)'
    }
  }, playing ? '❚❚' : '▶')), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 var(--size-body)/1.2 var(--font-display)',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), guest && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)',
      whiteSpace: 'nowrap'
    }
  }, guest)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      borderRadius: 2,
      background: 'rgba(246,241,232,.14)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      width: progress * 100 + '%',
      background: 'var(--grad-ember)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -3,
      left: 'calc(' + progress * 100 + '% - 4px)',
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--gold-400)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-timecode)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, elapsed, " / ", duration), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "water"
  }, "Full episode"));
}
Object.assign(__ds_scope, { PlayerBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/broadcast/PlayerBar.jsx", error: String((e && e.message) || e) }); }

// components/editorial/EpisodeCard.jsx
try { (() => {
function EpisodeCard({
  number,
  title,
  guest,
  duration,
  topics = [],
  thumbnail,
  status,
  onClick
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "0",
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      background: 'var(--surface-inset)',
      overflow: 'hidden'
    }
  }, thumbnail ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(1.05) contrast(1.04)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-scrim)'
    }
  }), status && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      left: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: status === 'Live' ? 'ember' : 'gold',
    solid: true,
    dot: status === 'Live'
  }, status)), duration && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'var(--space-4)',
      right: 'var(--space-4)',
      font: 'var(--text-timecode)',
      color: 'var(--bone-100)',
      background: 'rgba(7,11,16,.7)',
      padding: '5px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Ep. ", number), guest && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-gold)'
    }
  }, guest)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '400 var(--size-h3)/var(--lh-snug) var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, title), topics.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-1)'
    }
  }, topics.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))));
}
Object.assign(__ds_scope, { EpisodeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/EpisodeCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/QuoteBlock.jsx
try { (() => {
function QuoteBlock({
  quote,
  attribution,
  role,
  size = "md",
  onLight = false,
  align = "left"
}) {
  const sizes = {
    sm: 22,
    md: 30,
    lg: 44
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      textAlign: align,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 3,
      background: 'var(--grad-ember)',
      marginBottom: 'var(--space-5)',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'italic 400 ' + sizes[size] + 'px/1.34 var(--font-quote)',
      color: onLight ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, "\u201C", quote, "\u201D"), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--size-eyebrow)/1 var(--font-ui)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)'
    }
  }, attribution), role && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-body-sm)/1.4 var(--font-ui)',
      color: onLight ? 'var(--text-on-light-muted)' : 'var(--text-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ScriptureRef.jsx
try { (() => {
function ScriptureRef({
  verse,
  reference,
  translation = "ESV",
  variant = "block",
  onLight = false
}) {
  if (variant === "inline") return /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--size-body-sm)/1 var(--font-mono)',
      letterSpacing: '.04em',
      color: 'var(--gold-400)'
    }
  }, reference);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '3px solid var(--accent-gold)',
      paddingLeft: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 var(--size-body-lg)/var(--lh-body) var(--font-quote)',
      fontStyle: 'italic',
      color: onLight ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, verse), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      font: 'var(--weight-medium) var(--size-caption)/1 var(--font-mono)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, reference, " \xB7 ", translation));
}
Object.assign(__ds_scope, { ScriptureRef });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ScriptureRef.jsx", error: String((e && e.message) || e) }); }

// ui_kits/broadcast/Graphics.jsx
try { (() => {
const {
  LowerThird,
  Tag,
  QuoteBlock,
  ScriptureRef,
  RevealFrame,
  Button
} = window.WhoIsJesusToYouDesignSystem_d51368;
function Stage({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1 var(--font-ui)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-hairline)'
    }
  }, children));
}
function Feed() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/host-david-harris-jr.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 70,
      bottom: 0,
      height: '104%',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-scrim-left)'
    }
  }));
}
function OpenTitle() {
  return /*#__PURE__*/React.createElement(Stage, {
    label: "Open title \u2014 1920\xD71080"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(80% 100% at 20% 20%,rgba(46,134,200,.35),transparent 60%),radial-gradient(80% 100% at 85% 90%,rgba(232,81,30,.4),transparent 60%),var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 3,
      background: 'var(--grad-ember)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      font: '400 52px/1.05 var(--font-display)',
      letterSpacing: '-.015em',
      color: 'var(--bone-100)'
    }
  }, "Who is Jesus to you?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      font: '700 12px/1 var(--font-ui)',
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)'
    }
  }, "With David Harris Jr \xB7 Episode 14")));
}
function NamePlate({
  variant
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    label: "Lower third — " + variant
  }, /*#__PURE__*/React.createElement(Feed, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transform: 'scale(.52)',
      transformOrigin: 'bottom left'
    }
  }, /*#__PURE__*/React.createElement(LowerThird, {
    variant: variant,
    name: "Marcus Bell",
    role: "Author",
    ministry: "Redeemed Collective"
  })));
}
function QuestionCard() {
  return /*#__PURE__*/React.createElement(Stage, {
    label: "Question card \u2014 the recurring ask"
  }, /*#__PURE__*/React.createElement(Feed, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(7,11,16,.62)',
      backdropFilter: 'var(--blur-glass)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      padding: '0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1 var(--font-ui)',
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)'
    }
  }, "The question"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      font: '400 46px/1.08 var(--font-display)',
      color: 'var(--bone-100)',
      maxWidth: 520
    }
  }, "Who is Jesus to you?"))));
}
function QuoteBug() {
  return /*#__PURE__*/React.createElement(Stage, {
    label: "Quote bug \u2014 pull quote over feed"
  }, /*#__PURE__*/React.createElement(Feed, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 36,
      bottom: 36,
      right: '42%',
      background: 'var(--scrim-panel)',
      backdropFilter: 'var(--blur-glass)',
      borderLeft: '4px solid var(--ember-500)',
      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
      padding: '18px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'italic 400 22px/1.32 var(--font-quote)',
      color: 'var(--bone-100)'
    }
  }, "\u201CI didn't get rescued from the mess. I got met in it.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: '700 10.5px/1 var(--font-ui)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)'
    }
  }, "Marcus Bell")));
}
function ScriptureBug() {
  return /*#__PURE__*/React.createElement(Stage, {
    label: "Scripture bug"
  }, /*#__PURE__*/React.createElement(Feed, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 36,
      top: 36,
      maxWidth: 300,
      background: 'var(--scrim-panel)',
      backdropFilter: 'var(--blur-glass)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement(ScriptureRef, {
    verse: "But who do you say that I am?",
    reference: "Matthew 16:15"
  })));
}
function RevealShot() {
  const [r, setR] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1 var(--font-ui)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Reveal moment"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => setR(!r)
  }, r ? 'Hide again' : 'Play reveal')), /*#__PURE__*/React.createElement(RevealFrame, {
    src: "../../assets/artwork-jesus-reveal.jpg",
    revealed: r,
    onToggle: () => setR(!r),
    style: {
      aspectRatio: '16/9'
    },
    caption: "Shown once, at the end, in silence."
  }));
}
function SocialPosts() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      position: 'relative',
      background: 'radial-gradient(90% 80% at 80% 100%,rgba(232,81,30,.4),transparent 62%),var(--ink-900)',
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/host-david-harris-jr.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -24,
      bottom: 0,
      height: '70%',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold",
    solid: true
  }, "Episode 14"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      font: '400 30px/1.1 var(--font-display)',
      color: 'var(--bone-100)'
    }
  }, "The night I stopped running"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: '700 10px/1 var(--font-ui)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)'
    }
  }, "Marcus Bell"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--grad-revelation)',
      padding: 26,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(7,11,16,.55)',
      backdropFilter: 'var(--blur-glass)',
      borderRadius: 'var(--radius-md)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    size: "sm",
    quote: "I met Him in the worst year of my life.",
    attribution: "Marcus Bell"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--ink-900)',
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ScriptureRef, {
    verse: "But who do you say that I am?",
    reference: "Matthew 16:15"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: '700 10px/1 var(--font-ui)',
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "New episode Tuesday")));
}
Object.assign(window, {
  OpenTitle,
  NamePlate,
  QuestionCard,
  QuoteBug,
  ScriptureBug,
  RevealShot,
  SocialPosts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/broadcast/Graphics.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeading,
  QuoteBlock,
  Tag
} = window.WhoIsJesusToYouDesignSystem_d51368;
function About() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px',
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'radial-gradient(120% 100% at 60% 100%,rgba(232,81,30,.35),transparent 62%),var(--ink-800)',
      height: 420
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/host-david-harris-jr.png",
    alt: "David Harris Jr",
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 0,
      transform: 'translateX(-50%)',
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The host",
    title: "David Harris Jr",
    lede: "David has spent a decade asking people one question and refusing to accept the tidy answer. He hosts every conversation himself, remotely, one to one."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold"
  }, "Host"), /*#__PURE__*/React.createElement(Tag, null, "Producer"), /*#__PURE__*/React.createElement(Tag, null, "700 Club contributor")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Book a conversation"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Press kit")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 40px',
      background: 'var(--surface-light)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onLight: true,
    align: "center",
    eyebrow: "Why we make it",
    title: "A platform, not a pulpit",
    lede: "Guests bring their convictions, their wreckage and their wisdom. The show exists to hold it steady and point past it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 44
    }
  }, [["Honest", "No question is off limits, including the ones without answers."], ["Intimate", "1:1, remote, unhurried. Long silences stay in."], ["For Him", "Every testimony is told to glorify who Jesus was, is, and is to come."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    surface: "light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 22px/1.25 var(--font-display)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: '400 14.5px/1.65 var(--font-ui)',
      color: 'var(--text-on-light-muted)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    onLight: true,
    align: "center",
    size: "md",
    quote: "Tell me the truth about your life, and we'll both find out who He is.",
    attribution: "David Harris Jr",
    role: "Host"
  }))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Tag
} = window.WhoIsJesusToYouDesignSystem_d51368;
function SiteHeader({
  route,
  go
}) {
  const link = (id, label) => /*#__PURE__*/React.createElement("a", {
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      font: '600 12px/1 var(--font-ui)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: route === id ? 'var(--accent-gold)' : 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px',
      background: 'rgba(7,11,16,.82)',
      backdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 20px/1 var(--font-display)',
      color: 'var(--bone-100)'
    }
  }, "Who is Jesus to You?"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      font: '700 10px/1 var(--font-ui)',
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "with David Harris Jr")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, link('home', 'Episodes'), link('episode', 'Latest'), link('about', 'About'), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "gold"
  }, "Subscribe")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '56px 40px',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 26px/1.15 var(--font-display)',
      color: 'var(--bone-100)'
    }
  }, "Who is Jesus to you?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      font: '400 14px/1.6 var(--font-ui)',
      color: 'var(--text-muted)',
      maxWidth: 420
    }
  }, "New conversations every Tuesday. One question, honestly answered.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "water"
  }, "Apple Podcasts"), /*#__PURE__*/React.createElement(Tag, {
    tone: "water"
  }, "Spotify"), /*#__PURE__*/React.createElement(Tag, {
    tone: "water"
  }, "YouTube")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EpisodePage.jsx
try { (() => {
const {
  Button,
  Tag,
  Card,
  QuoteBlock,
  ScriptureRef,
  PlayerBar,
  LowerThird,
  RevealFrame,
  SectionHeading
} = window.WhoIsJesusToYouDesignSystem_d51368;
function EpisodePage() {
  const [playing, setPlaying] = React.useState(true);
  const [revealed, setRevealed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 40px 140px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.55fr .85fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-inset)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/host-david-harris-jr.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 60,
      bottom: 0,
      height: '104%',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-scrim-left)'
    }
  }), /*#__PURE__*/React.createElement(LowerThird, {
    name: "Marcus Bell",
    role: "Author",
    ministry: "Redeemed Collective",
    question: "Who is Jesus to you?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold",
    solid: true
  }, "New"), /*#__PURE__*/React.createElement(Tag, null, "Testimony"), /*#__PURE__*/React.createElement(Tag, null, "Addiction"), /*#__PURE__*/React.createElement(Tag, {
    tone: "water"
  }, "Season 2")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      font: '400 44px/1.1 var(--font-display)',
      letterSpacing: '-.015em',
      color: 'var(--bone-100)'
    }
  }, "The night I stopped running"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      maxWidth: 640,
      font: '400 17px/1.7 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, "Marcus spent eleven years outrunning a question he first heard at fifteen. In this conversation he walks through the night it caught him \u2014 a hospital corridor in Detroit, a stranger's prayer, and the slow, unglamorous work of staying."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    quote: "I didn't get rescued from the mess. I got met in it.",
    attribution: "Marcus Bell"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The reveal",
    title: "Held to the final minute",
    rule: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(RevealFrame, {
    src: "../../assets/artwork-jesus-reveal.jpg",
    revealed: revealed,
    onToggle: () => setRevealed(!revealed),
    style: {
      height: 300
    },
    caption: "Every guest sees this painting for the first time on camera."
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "ember"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-ui)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)'
    }
  }, "Guest"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: '400 26px/1.15 var(--font-display)'
    }
  }, "Marcus Bell"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: '400 14px/1.6 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, "Author, Redeemed Collective. Detroit, MI."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    fullWidth: true
  }, "Guest bio"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-ui)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Chapters"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, [["00:00", "Fifteen, and already running"], ["12:40", "Detroit, 3 a.m."], ["27:05", "The prayer he didn't ask for"], ["41:18", "Staying"], ["49:02", "Who is Jesus to you?"]].map(([t, l]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-timecode)',
      color: 'var(--gold-400)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.5 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, l))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(ScriptureRef, {
    verse: "Come to me, all who labor and are heavy laden.",
    reference: "Matthew 11:28"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 40,
      right: 40,
      bottom: 24,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(PlayerBar, {
    title: "The night I stopped running",
    guest: "Marcus Bell",
    playing: playing,
    onToggle: () => setPlaying(!playing)
  })));
}
Object.assign(window, {
  EpisodePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EpisodePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  Card,
  SectionHeading,
  EpisodeCard,
  QuoteBlock,
  ScriptureRef
} = window.WhoIsJesusToYouDesignSystem_d51368;
const EPISODES = [{
  number: 14,
  title: "The night I stopped running",
  guest: "Marcus Bell",
  duration: "52:18",
  topics: ["Testimony", "Addiction"],
  status: "New"
}, {
  number: 13,
  title: "What my daughter's illness taught me about prayer",
  guest: "Renee Okafor",
  duration: "47:02",
  topics: ["Suffering", "Family"]
}, {
  number: 12,
  title: "I built the career and lost the man",
  guest: "Tom Vasquez",
  duration: "58:41",
  topics: ["Calling", "Identity"]
}];
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '96px 40px 64px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(90% 120% at 82% 90%, rgba(232,81,30,.30), transparent 62%), radial-gradient(70% 90% at 8% 10%, rgba(46,134,200,.22), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/host-david-harris-jr.png",
    alt: "David Harris Jr",
    style: {
      position: 'absolute',
      right: 40,
      bottom: -30,
      height: 540,
      objectFit: 'contain',
      filter: 'drop-shadow(0 30px 60px rgba(0,0,0,.6))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 660
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-ui)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)'
    }
  }, "Season Two \xB7 New Tuesdays"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      font: '400 76px/1.04 var(--font-display)',
      letterSpacing: '-.015em',
      color: 'var(--bone-100)'
    }
  }, "Who is Jesus", /*#__PURE__*/React.createElement("br", null), "to you?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 520,
      font: '400 19px/1.62 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, "One question. One camera. An hour with someone willing to answer it honestly \u2014 the doubt, the wreckage, and what they found on the other side."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('episode')
  }, "Watch episode 14"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "All episodes")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 40px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Recent conversations",
    title: "Testimony, in their own words"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 40
    }
  }, EPISODES.map(e => /*#__PURE__*/React.createElement(EpisodeCard, _extends({
    key: e.number
  }, e, {
    thumbnail: "../../assets/host-david-harris-jr.png",
    onClick: () => go('episode')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 40px',
      background: 'var(--surface-raised)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr .8fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    size: "lg",
    quote: "I met Him in the worst year of my life, and I've never been able to explain it away since.",
    attribution: "Marcus Bell",
    role: "Episode 14 \u2014 The night I stopped running"
  }), /*#__PURE__*/React.createElement(Card, {
    accent: "revelation"
  }, /*#__PURE__*/React.createElement(ScriptureRef, {
    verse: "But who do you say that I am?",
    reference: "Matthew 16:15"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, [["Remote, always", "Every conversation is recorded 1:1 over video — no studio audience, no set, nothing between the guest and the question."], ["No script", "Guests see one question in advance. The rest is wherever their story goes."], ["Share yours", "Testimonies from listeners are read at the end of each season."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 21px/1.3 var(--font-display)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: '400 14.5px/1.65 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, d)))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.LowerThird = __ds_scope.LowerThird;

__ds_ns.PlayerBar = __ds_scope.PlayerBar;

__ds_ns.RevealFrame = __ds_scope.RevealFrame;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.EpisodeCard = __ds_scope.EpisodeCard;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.ScriptureRef = __ds_scope.ScriptureRef;

})();
