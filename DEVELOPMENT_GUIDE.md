# CalmCar React 개발 가이드

## 목차
1. [프로젝트 구조](#프로젝트-구조)
2. [개발 환경 설정](#개발-환경-설정)
3. [배포 프로세스](#배포-프로세스)
4. [모바일 반응형 개발](#모바일-반응형-개발)
5. [주의사항](#주의사항)

## 프로젝트 구조

```
calmcar-react/
├── public/
│   ├── images/         # 이미지 파일들
│   ├── css/           # 글로벌 CSS
│   └── index.html     # HTML 템플릿
├── src/
│   ├── components/    # React 컴포넌트
│   ├── hooks/         # 커스텀 훅
│   ├── App.tsx        # 메인 앱 컴포넌트
│   ├── App.css        # 데스크톱 스타일
│   └── App-mobile.css # 모바일 전용 스타일
└── package.json       # 프로젝트 설정

```

## 개발 환경 설정

### 1. 개발 서버 실행
```bash
npm install  # 의존성 설치
npm start    # 개발 서버 실행 (http://localhost:3000)
```

### 2. 빌드
```bash
npm run build  # 프로덕션 빌드
```

### 3. 타입 체크
```bash
npm run typecheck  # TypeScript 타입 검증
```

## 배포 프로세스

### GitHub + Vercel 자동 배포
1. **코드 변경 후 커밋**
   ```bash
   git add .
   git commit -m "커밋 메시지"
   git push origin main
   ```

2. **Vercel 자동 배포**
   - main 브랜치에 푸시하면 Vercel이 자동으로 감지하고 배포
   - 배포 상태는 https://vercel.com 대시보드에서 확인

### Personal Access Token 설정 (GitHub)
1. GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic) 클릭
3. **repo** 권한 체크
4. 토큰 생성 후 안전한 곳에 보관

## 모바일 반응형 개발

### 1. 모바일 전용 스타일 작성
- **파일**: `src/App-mobile.css`
- **적용 범위**: `@media (max-width: 768px)`
- **우선순위**: `!important` 사용으로 데스크톱 스타일 오버라이드

### 2. 모바일 스타일링 원칙
```css
/* 예시: 모바일에서만 이미지 높이 변경 */
@media (max-width: 768px) {
    .tech-image {
        height: 250px !important;  /* 데스크톱과 다른 높이 */
    }
}
```

### 3. 레이아웃 순서 변경 (Flexbox order)
```css
/* 모바일에서 이미지를 먼저 표시 */
.product-showcase .product-image {
    order: 1;  /* 이미지가 먼저 */
}
.product-showcase .product-info {
    order: 2;  /* 설명이 나중에 */
}
```

### 4. 모바일 최적화 체크리스트
- [ ] 터치 타겟 최소 44px 높이
- [ ] 폰트 크기 최소 14px (0.875rem)
- [ ] 패딩/마진 조정으로 공간 효율성 확보
- [ ] 불필요한 hover 효과 제거
- [ ] 가로 스크롤 방지

## 주의사항

### 1. Zone.Identifier 파일
- Windows에서 다운로드한 파일에 자동 생성됨
- Git에 포함시키지 않도록 주의
- 발견 시 삭제: `find . -name "*:Zone.Identifier" -type f -delete`

### 2. 이미지 최적화
- 웹용 이미지는 적절한 크기로 압축
- 큰 이미지는 로딩 성능에 영향
- 권장 포맷: WebP, 최적화된 JPEG/PNG

### 3. SEO 최적화
- `public/index.html`의 메타 태그 관리
- 각 페이지별 적절한 타이틀과 설명 설정

### 4. 성능 모니터링
- Vercel Analytics 활용
- Chrome DevTools의 Lighthouse 사용
- 모바일 성능 특히 주의

### 5. 브라우저 호환성
- Chrome, Safari, Firefox 최신 버전 지원
- IE는 지원하지 않음
- 모바일 브라우저 테스트 필수

## 문제 해결

### Git Push 인증 실패
```bash
# Personal Access Token으로 URL 설정
git remote set-url origin https://USERNAME:TOKEN@github.com/USERNAME/REPO.git
```

### 빌드 에러 발생 시
1. `npm install` 재실행
2. `node_modules` 삭제 후 재설치
3. TypeScript 에러 확인: `npm run typecheck`

### Vercel 배포 실패
1. Vercel 대시보드에서 로그 확인
2. Build Command: `npm run build`
3. Output Directory: `build`
4. Framework Preset: Create React App

## 연락처
문제 발생 시 GitHub Issues에 등록하거나 팀에 문의하세요.