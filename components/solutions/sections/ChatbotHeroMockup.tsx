// components/solutions/sections/ChatbotHeroMockup.tsx
'use client';

import { Share2, HelpCircle } from 'lucide-react';

type Platform = 'zapier' | 'salesforce' | 'hubspot' | 'n8n' | 'airtable';

interface ChatbotHeroMockupProps {
  platform: Platform;
}

const PLATFORM_LABEL: Record<Platform, string> = {
  zapier: 'zapier',
  salesforce: 'salesforce',
  hubspot: 'hubspot',
  n8n: 'n8n',
  airtable: 'airtable',
};

/**
 * Recreates the "builder + live chat widget" hero graphic as real markup
 * instead of a static PNG, so the "Built on ___" badge can swap per platform.
 *
 * Usage:
 *   <ChatbotHeroMockup platform="zapier" />
 *   <ChatbotHeroMockup platform="salesforce" />
 *
 * Drop this in place of the `image` prop on <HeroSection />, e.g. by adding
 * a `visual?: React.ReactNode` prop to HeroSection that renders this instead
 * of an <img> when provided.
 */
export function ChatbotHeroMockup({ platform }: ChatbotHeroMockupProps) {
  const badge = PLATFORM_LABEL[platform];

  return (
    <div className="relative w-full aspect-[4/3] select-none">
      {/* ambient bg - brand orange */}
      <div className="absolute inset-0 rounded-[28px] bg-brand/10" />

      {/* ===== back panel: builder / conversations window ===== */}
      <div className="absolute right-0 top-[4%] w-[86%] h-[92%] rounded-2xl bg-white/90 border border-orange-200/60 shadow-[0_20px_60px_-15px_rgba(249,115,22,0.25)] overflow-hidden backdrop-blur-sm">
        {/* title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-orange-100/80 bg-white/60">
          <div className="w-5 h-5 rounded-md bg-orange-200" />
          <HelpCircle className="w-4 h-4 text-orange-400" strokeWidth={2} />
        </div>

        {/* tab bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-orange-100/80">
          <nav className="flex items-center gap-4 text-[10px] font-medium">
            <span className="text-orange-400">Setup</span>
            <span className="text-black font-semibold">Directive</span>
            <span className="text-orange-400">Actions&nbsp;3</span>
            <span className="text-orange-400">Style</span>
            <span className="text-orange-400">Conversations</span>
          </nav>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-brand text-white text-[9px] font-semibold flex items-center gap-1">
              <Share2 className="w-2.5 h-2.5" /> Share
            </span>
            <span className="px-2.5 py-1 rounded-md border border-orange-200 text-orange-600 text-[9px] font-semibold">
              Embed
            </span>
          </div>
        </div>

        {/* body */}
        <div className="flex h-[calc(100%-84px)]">
          {/* left field column */}
          <div className="w-[26%] border-r border-orange-100/80 p-4 space-y-4">
            <div className="space-y-1.5">
              <span className="block text-[8px] font-semibold text-orange-400 uppercase tracking-wide">
                Name
              </span>
              <div className="h-2.5 w-4/5 rounded-full bg-orange-100" />
            </div>
            <div className="h-2.5 w-full rounded-full bg-orange-50" />
            <div className="h-2.5 w-3/4 rounded-full bg-orange-50" />
            <div className="h-2.5 w-5/6 rounded-full bg-orange-50" />
            <div className="h-2.5 w-2/3 rounded-full bg-orange-50" />
            <div className="h-6 w-full rounded-md border border-orange-100 flex items-center justify-end px-2">
              <span className="text-[8px] text-orange-400">⌄</span>
            </div>
          </div>

          {/* right conversation column */}
          <div className="flex-1 p-4 flex flex-col gap-3">
            <div className="w-4 h-4 rounded-full border border-orange-200 flex items-center justify-center text-orange-400 text-[8px]">
              ↺
            </div>

            <div className="space-y-1.5 max-w-[80%]">
              <div className="h-2.5 w-full rounded-full bg-orange-100" />
              <div className="h-2.5 w-3/5 rounded-full bg-orange-100" />
            </div>

            <div className="h-2.5 w-1/2 rounded-full bg-orange-50 self-end" />

            <div className="rounded-lg border border-orange-100 bg-white p-3 space-y-2 max-w-[85%]">
              <div className="h-2.5 w-full rounded-full bg-orange-50" />
              <div className="h-2.5 w-2/3 rounded-full bg-orange-50" />
              <div className="flex items-center justify-between pt-1">
                <span className="text-[8px] text-orange-400 flex items-center gap-2">
                  <span>⧉ Copy</span>
                  <span>⚡ Zap</span>
                </span>
                <span className="text-[8px] text-orange-300">⌢ ⌣</span>
              </div>
            </div>

            <div className="mt-auto h-8 w-full rounded-lg border border-orange-100 bg-white flex items-center px-3">
              <div className="h-2 w-2/5 rounded-full bg-orange-50" />
              <span className="ml-auto text-brand text-xs">➤</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== front card: live chatbot widget ===== */}
      <div className="absolute left-0 bottom-[6%] w-[58%] rounded-2xl bg-white border border-orange-200/60 shadow-[0_25px_50px_-12px_rgba(249,115,22,0.35)] overflow-hidden">
        <div className="p-4 space-y-3">
          <p className="text-[13px] font-bold text-black">Support Chatbot</p>

          <div className="rounded-lg bg-brand/10 p-2.5">
            <div className="h-2 w-4/5 rounded-full bg-brand/20" />
          </div>

          <p className="text-[13px] font-bold text-black">Support Chatbot</p>

          <div className="space-y-1.5">
            <div className="h-2 w-full rounded-full bg-orange-50" />
            <div className="h-2 w-4/5 rounded-full bg-orange-50" />
          </div>

          <div className="h-8 rounded-lg border border-orange-100 flex items-center px-3 mt-3">
            <div className="h-1.5 w-1/3 rounded-full bg-orange-50" />
            <span className="ml-auto text-brand text-sm">➤</span>
          </div>
        </div>

        <div className="border-t border-orange-100 bg-brand/5 py-2 text-center">
          <span className="text-[9px] font-semibold text-orange-400 tracking-wide">
            Built on <span className="text-black">…{badge}</span>
          </span>
        </div>
      </div>
    </div>
  );
}