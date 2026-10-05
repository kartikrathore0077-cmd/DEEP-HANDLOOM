import React, { useState } from 'react';
import { Review, INITIAL_REVIEWS } from '../data/storeData';
import { Star, CheckCircle, MessageSquarePlus, ThumbsUp, Car, Sparkles, Users } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [filterTopic, setFilterTopic] = useState<string>('All');
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState<Review['category']>('Branded Wear');
  const [comment, setComment] = useState('');

  const topics = ['All', 'Branded Wear', 'Handloom & Fabrics', 'Staff & Service', 'Parking & Store'];

  const filteredReviews = reviews.filter((r) => {
    if (filterTopic === 'All') return true;
    return r.category === filterTopic;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: name.trim(),
      location: location.trim() || 'Rajasthan',
      rating,
      date: 'Just now',
      comment: comment.trim(),
      category,
      verifiedCustomer: true
    };

    setReviews([newRev, ...reviews]);
    setName('');
    setLocation('');
    setComment('');
    setShowReviewModal(false);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Ratings & Customer Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 mt-1">
              Trusted by 300+ Local Families Across Nagaur
            </h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base max-w-xl">
              Authentic feedback from visitors praising our wide garment variety, 
              genuine brand availability, courteous staff, and convenient showroom parking.
            </p>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="px-5 py-2.5 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-xs transition-colors flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-amber-900" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Aggregate Ratings & Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Big Score Card */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Overall Customer Rating
              </div>
              <div className="flex items-baseline gap-3 mt-3">
                <span className="font-serif text-5xl font-bold text-stone-900 tabular-nums">
                  4.1
                </span>
                <span className="text-stone-400 text-lg">/ 5.0</span>
              </div>

              <div className="flex items-center gap-1 mt-2 text-amber-500">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-5 h-5 fill-amber-400/40 text-amber-400" />
              </div>

              <p className="text-xs text-stone-500 mt-3">
                Based on over 300+ public customer reviews across local listings and in-store feedback.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-emerald-800 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Public Local Store Verified</span>
            </div>
          </div>

          {/* Key Compliments Breakdown */}
          <div className="md:col-span-8 p-8 rounded-2xl bg-white border border-stone-200 shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-900" />
                  <span>Wide Variety of Clothes</span>
                </span>
                <span className="text-amber-900 tabular-nums">4.5 / 5</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-900 h-full rounded-full" style={{ width: '90%' }} />
              </div>
              <p className="text-[11px] text-stone-500">Readymade wear for men, women, kids, and festival collections.</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-800">
                <span className="flex items-center gap-1.5">
                  <ThumbsUp className="w-4 h-4 text-amber-900" />
                  <span>Popular Fashion Brands</span>
                </span>
                <span className="text-amber-900 tabular-nums">4.8 / 5</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-900 h-full rounded-full" style={{ width: '96%' }} />
              </div>
              <p className="text-[11px] text-stone-500">Official Mufti, Jockey & Red Tape original inventory.</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-900" />
                  <span>Polite & Attentive Staff</span>
                </span>
                <span className="text-amber-900 tabular-nums">4.6 / 5</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-900 h-full rounded-full" style={{ width: '92%' }} />
              </div>
              <p className="text-[11px] text-stone-500">Helpful customer service across fitting and design choices.</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-amber-900" />
                  <span>Good Parking Facilities</span>
                </span>
                <span className="text-amber-900 tabular-nums">4.4 / 5</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-900 h-full rounded-full" style={{ width: '88%' }} />
              </div>
              <p className="text-[11px] text-stone-500">Dedicated wide front parking opposite Government College.</p>
            </div>
          </div>
        </div>

        {/* Filter by Topic Pills (Interactive Segmented buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto max-w-full mb-8">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setFilterTopic(t)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filterTopic === t
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-900/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-stone-400">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Topic */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-stone-900">{rev.author}</div>
                  <div className="text-[11px] text-stone-400">{rev.location}</div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-amber-900 font-medium">{rev.category}</div>
                  {rev.verifiedCustomer && (
                    <div className="flex items-center gap-1 text-[10px] text-emerald-700 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verified Visit</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write a Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-stone-200 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Share Your Experience with Deep Handloom
                </h3>
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="text-stone-400 hover:text-stone-800 text-xs px-2 py-1"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Suresh Kumar"
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">City / Village</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Merta City / Nagaur"
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-stone-700 ml-2">{rating} out of 5</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Feedback Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-900"
                  >
                    <option value="Branded Wear">Branded Wear (Jockey, Mufti, Red Tape)</option>
                    <option value="Handloom & Fabrics">Handloom & Fabrics (Bedsheets, Sarees)</option>
                    <option value="Staff & Service">Staff Courtesy & Service</option>
                    <option value="Parking & Store">Parking Facility & Store Environment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell other shoppers about the staff, parking, clothing variety, or product quality..."
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-900"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold bg-amber-900 text-white rounded-lg hover:bg-amber-950 transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
