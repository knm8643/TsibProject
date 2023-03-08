export default {
    name: "CreditPage",
    mounted() {
        console.log('여기들어온건가?')
        const sections = document.querySelectorAll('div'); // 섹션 요소들
        const windowHeight = window.innerHeight; // 현재 윈도우 높이

        let visibleSections = []; // 보이는 섹션들

        // 스크롤 이벤트 감지
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY; // 현재 스크롤 위치

            sections.forEach((section) => {
                const sectionTop = section.offsetTop; // 섹션 시작점
                const sectionHeight = section.offsetHeight; // 섹션 높이
                const sectionBottom = sectionTop + sectionHeight; // 섹션 끝점

                if (sectionBottom > scrollTop && sectionTop < scrollTop + windowHeight) {
                    // 현재 보이는 영역과 겹치는 부분이 있다면
                    if (!visibleSections.includes(section)) {
                        // 보이는 섹션 배열에 해당 섹션이 없으면 추가
                        visibleSections.push(section);
                    }
                } else {
                    // 현재 보이는 영역과 겹치는 부분이 없다면
                    if (visibleSections.includes(section)) {
                        // 보이는 섹션 배열에서 해당 섹션 제거
                        visibleSections = visibleSections.filter((visibleSection) => visibleSection !== section);
                    }
                }
            });

            // 현재 보이는 섹션 중 가장 마지막 인덱스에 있는 섹션을 다음 섹션으로 설정
            const lastIndex = visibleSections.length - 1;
            const nextSectionIndex = visibleSections[lastIndex].nextElementSibling ? lastIndex + 1 : lastIndex;

            // 다음 섹션을 보이도록 처리
            visibleSections[nextSectionIndex]?.classList.add('show');
        });
    },
    methods:{

    }
}