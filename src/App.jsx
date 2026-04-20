import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import QuizList from './pages/QuizList'
import QuizDetail from './pages/QuizDetail'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/quizzes/:id" element={<QuizDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
