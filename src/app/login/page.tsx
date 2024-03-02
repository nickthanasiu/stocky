export default function LoginPage() {
    return (
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <form>
            <input type="text" name="email" />
            <input type="password" name ="password" />
            <input type="submit" name="submit" />
          </form>
        </div>
      </main>
    );
  }