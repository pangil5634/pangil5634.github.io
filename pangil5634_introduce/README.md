# pangil5634_introduce

Astro + TypeScript + MDX 기반 포트폴리오/기술블로그입니다.

## Scripts
- `npm run dev`: 로컬 개발 서버
- `npm run build`: 정적 빌드
- `npm run cms:proxy`: Decap 로컬 백엔드 프록시
- `npm run deploy`: `dist`를 gh-pages로 배포

## Content Admin (Decap CMS)
- 접속 경로: `/admin`
- 설정 파일: `public/admin/config.yml`

### 동작 방식
Decap CMS는 GitHub 저장소에 `src/content/posts`, `src/content/projects`의 MDX 파일을 직접 커밋합니다.

### 필수 설정 (1회)
현재 `config.yml`의 아래 값을 실제 OAuth 서버 값으로 바꿔야 로그인 가능합니다.

```yml
backend:
  base_url: https://YOUR_OAUTH_SERVER_DOMAIN
  auth_endpoint: auth
```

### OAuth 서버 옵션
1. Decap 공식 OAuth 서비스(자체 호스팅)
2. Netlify Identity 사용
3. 기타 GitHub OAuth 프록시 서비스

OAuth 설정 전에는 `/admin` UI는 열리지만 GitHub 인증/저장이 동작하지 않습니다.

자세한 절차는 `OAUTH_SETUP.md`를 참고하세요.
