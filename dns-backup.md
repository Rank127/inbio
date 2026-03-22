# iNBIO DNS Records Backup — inbio.net
## Captured: 2026-03-21

### MX Records (Email Routing)
| Type | Name | Priority | Value | TTL |
|------|------|----------|-------|-----|
| MX | @ | 1 | SMTP.GOOGLE.COM | 14400 |
| MX | @ | 5 | mx2.hostinger.com | 14400 |
| MX | @ | 10 | mx1.hostinger.com | 14400 |

### A Records
| Type | Name | Priority | Value | TTL |
|------|------|----------|-------|-----|
| A | ftp | 0 | 148.230.89.132 | 1800 |
| A | staging | 0 | 148.230.89.132 | 1800 |

### AAAA Records
| Type | Name | Priority | Value | TTL |
|------|------|----------|-------|-----|
| AAAA | staging | 0 | 2a02:4780:2b:1672:0:6be:6e2:2 | 1800 |

### CNAME Records
| Type | Name | Priority | Value | TTL |
|------|------|----------|-------|-----|
| CNAME | www | 0 | www.inbio.net.cdn.hstgr.net | 300 |
| CNAME | autodiscover | 0 | autodiscover.mail.hostinger.com | 300 |
| CNAME | autoconfig | 0 | autoconfig.mail.hostinger.com | 300 |
| CNAME | hostingermail-a._domainkey | 0 | hostingermail-a.dkim.mail.hostinger.com | 300 |
| CNAME | hostingermail-b._domainkey | 0 | hostingermail-b.dkim.mail.hostinger.com | 300 |
| CNAME | hostingermail-c._domainkey | 0 | hostingermail-c.dkim.mail.hostinger.com | 300 |

### ALIAS Records
| Type | Name | Priority | Value | TTL |
|------|------|----------|-------|-----|
| ALIAS | @ | 0 | inbio.net.cdn.hstgr.net | 300 |
| ALIAS | staging1 | 0 | staging1.inbio.net.cdn.hstgr.net | 300 |

### TXT Records
| Type | Name | Priority | Value | TTL |
|------|------|----------|-------|-----|
| TXT | @ | 0 | v=spf1 include:_spf.mail.hostinger.com ~all | 3600 |
| TXT | _dmarc | 0 | v=DMARC1; p=none | 3600 |

---

## Notes

### Email Routing
- Google SMTP has **priority 1** (highest) — email goes to Google first
- Hostinger mail servers are backup (priority 5 and 10)
- SPF record only includes Hostinger — **needs Google added when fully on Google Workspace**
  - Should be: `v=spf1 include:_spf.google.com include:_spf.mail.hostinger.com ~all`
- DKIM is set up for Hostinger mail only — Google Workspace DKIM should be added

### Website Routing
- Root domain (@) → inbio.net.cdn.hstgr.net (Hostinger CDN)
- www → www.inbio.net.cdn.hstgr.net (Hostinger CDN)
- Server IP: 148.230.89.132
- Staging subdomain exists (staging.inbio.net)

### For Next.js Deployment
- NO DNS changes needed — site stays on same Hostinger server/CDN
- MX records stay untouched — email keeps working
- Only change is what's deployed in the hosting, not the DNS
