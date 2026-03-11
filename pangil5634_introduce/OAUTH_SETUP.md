# Decap CMS OAuth Setup

이 문서는 GitHub Pages 환경에서 Decap CMS(`/admin`) 로그인을 활성화하는 절차입니다.

## 1) GitHub OAuth App 생성
1. GitHub Settings -> Developer settings -> OAuth Apps -> New OAuth App
2. 설정값 입력
- Application name: `pangil5634 decap cms`
- Homepage URL: `https://pangil5634.github.io`
- Authorization callback URL: `https://YOUR_OAUTH_SERVER_DOMAIN/callback`
3. 생성 후 `Client ID`, `Client Secret` 확보

## 2) OAuth 서버 준비
GitHub Pages는 서버를 실행할 수 없으므로 외부 OAuth 서버가 필요합니다.

옵션:
- Decap OAuth Server 자체 호스팅 (권장)
- Netlify Identity 기반 구성

필수 환경변수(서버 측):
- `ORIGIN=https://pangil5634.github.io`
- `GITHUB_CLIENT_ID=<client_id>`
- `GITHUB_CLIENT_SECRET=<client_secret>`

서버가 준비되면 base URL을 얻습니다.
예: `https://cms-auth.example.com`

## 3) Decap config 연결
`public/admin/config.yml` 수정:

```yml
backend:
  name: github
  repo: pangil5634/pangil5634.github.io
  branch: main
  base_url: https://cms-auth.example.com
  auth_endpoint: auth
```

## 4) 로컬 테스트
1. 터미널 A
```bash
npm run cms:proxy
```

2. 터미널 B
```bash
npm run dev
```

3. 브라우저 접속
- `http://localhost:4321/admin`

`local_backend: true`가 활성화되어 있으면 로컬 프록시 기반으로 작성 테스트가 가능합니다.

## 5) 운영 검증
1. `npm run deploy`로 반영
2. `https://pangil5634.github.io/admin` 접속
3. GitHub 로그인 후 post/project 생성 및 저장 확인

## Troubleshooting
- 로그인 버튼 무반응: `base_url`, callback URL 불일치 여부 확인
- 저장 실패: repo 권한(scope) 및 branch 설정 확인
- 404/401: OAuth 서버 라우팅(`/auth`, `/callback`) 및 ORIGIN 확인
