import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Baby } from 'lucide-react';

const SelectionScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">부모 대신 전화 걸어 경제관념과 생활습관을 교육하는 똑똑한 ai, 넛지</h1>
          <p className="text-gray-600">사용할 모드를 선택하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 아이 모드 */}
          <button
            onClick={() => navigate('/child')}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-transparent hover:border-red-400"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-3xl flex items-center justify-center mb-6">
                <Baby className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">아이 모드</h2>
              <p className="text-gray-600 text-center mb-4">
                용돈 관리, 미션 완료, AI와 대화
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">용돈 확인</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">결제하기</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">미션</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">저축목표</span>
              </div>
            </div>
          </button>

          {/* 부모 모드 */}
          <button
            onClick={() => navigate('/parent')}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-transparent hover:border-purple-400"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-stone-700 to-stone-800 rounded-3xl flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">부모 모드</h2>
              <p className="text-gray-600 text-center mb-4">
                용돈 관리, 결제 승인, AI 규칙 설정
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">대시보드</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">결제승인</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">AI규칙</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">통화기록</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionScreen;